import React, { Component, Fragment } from 'react';
import { Button } from 'reactstrap';
import moment from 'moment';
import { Utils } from '../../../utils/utils';
import { seafileAPI } from '../../../utils/seafile-api';
import { siteRoot, loginUrl, gettext } from '../../../utils/constants';
import toaster from '../../../components/toast';
import EmptyTip from '../../../components/empty-tip';
import Loading from '../../../components/loading';
import SysAdminUserRoleEditor from '../../../components/select-editor/sysadmin-user-roles-editor';
import SysAdminAddOrgDialog from '../../../components/dialog/sysadmin-dialog/sysadmin-add-org-dialog';
import CommonOperationDialog from '../../../components/dialog/common-operation-dialog';
import MainPanelTopbar from '../main-panel-topbar';

class Content extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { loading, errorMsg, items } = this.props;
    if (loading) {
      return <Loading />;
    } else if (errorMsg) {
      return <p className="error text-center mt-4">{errorMsg}</p>;
    } else {
      const emptyTip = (
        <EmptyTip>
          <h2>{gettext('No organizations')}</h2>
        </EmptyTip>
      );
      const table = (
        <Fragment>
          <table className="table-hover">
            <thead>
              <tr>
                <th width="20%">{gettext('Name')}</th>
                <th width="20%">{gettext('Creator')}</th>
                <th width="20%">{gettext('Role')}</th>
                <th width="15%">{gettext('Space Used')}</th>
                <th width="20%">{gettext('Created At')}</th>
                <th width="5%">{/* Operations */}</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => {
                return (<Item
                  key={index}
                  item={item}
                  availableRoles={this.props.availableRoles}
                  updateRole={this.props.updateRole}
                  deleteOrg={this.props.deleteOrg}
                />);
              })}
            </tbody>
          </table>
        </Fragment>
      );
      return items.length ? table : emptyTip; 
    }
  }
}

class Item extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpIconShown: false,
      isDeleteDialogOpen: false
    };
  }

  handleMouseEnter = () => {
    this.setState({isOpIconShown: true});
  }

  handleMouseLeave = () => {
    this.setState({isOpIconShown: false});
  }

  toggleDeleteDialog = (e) => {
    if (e) {
      e.preventDefault();
    }
    this.setState({isDeleteDialogOpen: !this.state.isDeleteDialogOpen});
  }

  updateRole = (role) => {
    this.props.updateRole(this.props.item.org_id, role);
  }

  deleteOrg = () => {
    this.props.deleteOrg(this.props.item.org_id);
  }

  render() {
    const { item, availableRoles } = this.props;
    const { isOpIconShown, isDeleteDialogOpen } = this.state;

    let orgName = '<span class="op-target">' + Utils.HTMLescape(item.org_name) + '</span>';
    let deleteDialogMsg = gettext('Are you sure you want to delete {placeholder} ?').replace('{placeholder}', orgName);

    return (
      <Fragment>
        <tr onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          <td><a href={`${siteRoot}sys/organization/${item.org_id}/info/`}>{item.org_name}</a></td>
          <td><a href={`${siteRoot}useradmin/info/${encodeURIComponent(item.creator_email)}/`}>{item.creator_name}</a></td>
          <td>
            <SysAdminUserRoleEditor
              isTextMode={true}
              isEditIconShow={isOpIconShown}
              currentRole={item.role}
              roleOptions={availableRoles}
              onRoleChanged={this.updateRole}
            />
          </td>
          <td>{Utils.bytesToSize(item.quota_usage)}{item.quota > 0 ? `/ ${Utils.bytesToSize(item.quota)}` : ''}</td>
          <td>{moment(item.ctime).format('YYYY-MM-DD hh:mm:ss')}</td>
          <td>
            <a href="#" className={`action-icon sf2-icon-delete ${isOpIconShown ? '' : 'invisible'}`} title={gettext('Delete')} onClick={this.toggleDeleteDialog}></a>
          </td>
        </tr>
        {isDeleteDialogOpen &&
          <CommonOperationDialog
            title={gettext('Delete organization')}
            message={deleteDialogMsg}
            toggle={this.toggleDeleteDialog}
            executeOperation={this.deleteOrg}
            confirmBtnText={gettext('Delete')}
          />
        }
      </Fragment>
    );
  }
}

class Orgs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      errorMsg: '',
      orgList: [],
      availableRoles: [],
      isAddOrgDialogOpen: false
    };
  }

  componentDidMount () {
    seafileAPI.sysAdminListAllOrgs().then((res) => {
      this.setState({
        loading: false,
        orgList: res.data.organizations,
        availableRoles: res.data.available_roles
      });
    }).catch((error) => {
      if (error.response) {
        if (error.response.status == 403) {
          this.setState({
            loading: false,
            errorMsg: gettext('Permission denied')
          }); 
          location.href = `${loginUrl}?next=${encodeURIComponent(location.href)}`;
        } else {
          this.setState({
            loading: false,
            errorMsg: gettext('Error')
          }); 
        }   
      } else {
        this.setState({
          loading: false,
          errorMsg: gettext('Please check the network.')
        });
      }
    });
  }

  toggleAddOrgDialog = () => {
    this.setState({isAddOrgDialogOpen: !this.state.isAddOrgDialogOpen});
  }

  updateRole = (orgID, role) => {
    let orgInfo = {};
    orgInfo.role = role;
    seafileAPI.sysAdminUpdateOrgInfo(orgID, orgInfo).then(res => {
      let newOrgList = this.state.orgList.map(org => {
        if (org.org_id === orgID) {
          org.role = role;
        }
        return org;
      });
      this.setState({orgList: newOrgList});
    }).catch((error) => {
      let errMessage = Utils.getErrorMsg(error);
      toaster.danger(errMessage);
    });
  }

  addOrg = (data) => {
    const { orgName, ownerEmail, password } = data;
    seafileAPI.sysAdminAddOrg(orgName, ownerEmail, password).then(res => {
      let orgList = this.state.orgList;
      orgList.unshift(res.data);
      this.setState({orgList: orgList});
    }).catch((error) => {
      let errMessage = Utils.getErrorMsg(error);
      toaster.danger(errMessage);
    });
  }

  deleteOrg = (orgID) => {
    seafileAPI.sysAdminDeleteOrg(orgID).then(res => {
      let orgList = this.state.orgList.filter(org => {
        return org.org_id != orgID;
      });
      this.setState({orgList: orgList});
      toaster.success(gettext('Successfully deleted.'));
    }).catch((error) => {
      let errMessage = Utils.getErrorMsg(error);
      toaster.danger(errMessage);
    });
  }

  render() {
    const { isAddOrgDialogOpen } = this.state;
    return (
      <Fragment>
        <MainPanelTopbar>
          <Button className="btn btn-secondary operation-item" onClick={this.toggleAddOrgDialog}>{gettext('Add organization')}</Button>
        </MainPanelTopbar>
        <div className="main-panel-center flex-row">
          <div className="cur-view-container">
            <div className="cur-view-path">
              <h3 className="sf-heading">{gettext('Organizations')}</h3>
            </div> 
            <div className="cur-view-content">
              <Content
                loading={this.state.loading}
                errorMsg={this.state.errorMsg}
                items={this.state.orgList}
                availableRoles={this.state.availableRoles}
                updateRole={this.updateRole}
                deleteOrg={this.deleteOrg}
              />
            </div>
          </div>
        </div>
        {isAddOrgDialogOpen &&
          <SysAdminAddOrgDialog
            addOrg={this.addOrg}
            toggleDialog={this.toggleAddOrgDialog}
          />
        }
      </Fragment>
    );
  }
}

export default Orgs;
