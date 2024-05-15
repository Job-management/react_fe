import { Button, Form, Input, Row, Col } from 'antd';
import { Wrapper } from './styled';
import { ReloadOutlined, PlusCircleOutlined } from '@ant-design/icons';

type FieldType = {
  title?: string;
  address?: string;
  job?: string;
  salary?: string;
  level?: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MainBox = ({ className }: any) => {
  const [form] = Form.useForm();
  return (
    <Wrapper className={className}>
      <div className="main-box__top">
        <div className="main-box__top_title">
          <h1>
            Đón lấy thành công với <p> 27,582 cơ hội nghề nghiệp </p>
          </h1>
        </div>
        <Form
          form={form}
          name="basic"
          className="main-box__top_search"
          // wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off">
          <Row gutter={8}>
            <Col span={24}>
              <Form.Item<FieldType> name="title">
                <Input placeholder="Chức danh, Kỹ năng, Tên công ty" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={8}>
            <Col span={12}>
              <Form.Item<FieldType> name="address">
                <Input placeholder="Tất cả địa điểm" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item<FieldType> name="job">
                <Input placeholder="Tất cả ngành nghề" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={8}>
            <Col span={12}>
              <Form.Item name="salary">
                <Input placeholder="Chọn mức lương" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="level">
                <Input placeholder="Cấp bậc" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={8}>
            <Col span={12}>
              <div className="reload">
                <ReloadOutlined />
                Reset
              </div>
            </Col>
            <Col span={12}>
              <div className="advance-container">
                <div className="advance">
                  <PlusCircleOutlined />
                  Tìm kiếm nâng cao
                </div>
              </div>
            </Col>
          </Row>

          <Form.Item>
            <Button
              className="search_button"
              type="primary"
              htmlType="submit">
              Tìm việc ngay
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="main-box__bottom">
        <p className="main-box__bottom_title">Đăng hồ sơ nghề nghiệp để dễ dàng ứng tuyển nhanh</p>
        <Button className="main-box__bottom_submit">Đăng ngay</Button>
      </div>
    </Wrapper>
  );
};

export default MainBox;
