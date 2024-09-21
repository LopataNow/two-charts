import Head from "next/head";
import { Badge, Breadcrumb, Button, Col, Flex, Layout, Row, Typography } from 'antd';
import { Content, Header } from "antd/es/layout/layout";
import {  DeathChartCart } from "@/components/deathChartCart";
import { AlignLeftOutlined, DownloadOutlined, FunnelPlotOutlined } from "@ant-design/icons";
import { CasesChartCart } from "@/components/casesChartCart";

export default function Home() {
  return (
    <>
      <Head>
        <title>App</title>
        <meta name="description" content="App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout className="home-layout">
        <Header className="home-layout-header">
          <Typography.Title>App title</Typography.Title>
        </Header>
        <Content>
          <div className="home-content-navigation">
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <Flex wrap gap="small">
              <Button>Export to PDF<DownloadOutlined /></Button>
              <Button>Notes(3)<AlignLeftOutlined /></Button>
              <Button>Filter<Badge overflowCount={9} count={10}/><FunnelPlotOutlined /></Button>
            </Flex>
          </div>
          <Row className="home-content-cards" justify="space-between" gutter={[25, 16]}>
            <Col sm={24} xl={12}>
              <DeathChartCart/>
            </Col>
            <Col sm={24} xl={12}>
              <CasesChartCart/>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}
