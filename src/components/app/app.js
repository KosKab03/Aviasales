import 'antd/dist/reset.css';
import classes from './app.module.scss';

import SidebarMenu from '../sidebar-menu';
import HeaderMenu from '../header-menu';
import TicketList from '../ticket-list';
import ShowMoreBtn from '../show-more-btn';
import Loader from '../loader';

import getTickets from '../../store/actions/actions-get-tickets';

import React, { useEffect } from 'react';
import { Layout, Space } from 'antd';
import { connect } from 'react-redux';

const { Header, Sider, Content } = Layout;

function App({ loading, fetchData }) {
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.app}>
      <div className={classes['logo-aviasales']} />
      {!loading ? (
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
          <Layout>
            <Sider>
              <SidebarMenu />
            </Sider>
            <Layout className={classes['app-layout']}>
              <Header>
                <HeaderMenu />
              </Header>
              <Content>
                <TicketList />
              </Content>
              <div>
                <ShowMoreBtn />
              </div>
            </Layout>
          </Layout>
        </Space>
      ) : (
        <div className={classes.loader}>
          <Loader />
          <p>Загрузка данных с сервера</p>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => getTickets(dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
