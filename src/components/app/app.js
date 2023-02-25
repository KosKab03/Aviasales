import 'antd/dist/reset.css';
import classes from './app.module.scss';

import SidebarMenu from '../sidebar-menu';
import HeaderMenu from '../header-menu';
import TicketList from '../ticket-list';
import Loader from '../loader';
import { ErrorAlerts } from '../alerts/alerts';

import getTickets from '../../store/actions/actions-get-tickets';

import React, { useEffect } from 'react';
import { Layout, Space } from 'antd';
import { connect } from 'react-redux';

const { Header, Sider, Content } = Layout;

function App({ loading, error, fetchData }) {
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.app}>
      <div className={classes['logo-aviasales']} />
      {!error ? (
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
          <Layout>
            <Sider>
              <SidebarMenu />
            </Sider>
            <Layout className={classes['app-layout']}>
              <Header>
                <HeaderMenu />
              </Header>
              {!loading ? (
                <Content>
                  <TicketList />
                </Content>
              ) : (
                <div className={classes.loader}>
                  <Loader />
                </div>
              )}
            </Layout>
          </Layout>
        </Space>
      ) : (
        <ErrorAlerts />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => getTickets(dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
