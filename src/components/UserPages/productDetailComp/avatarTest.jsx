import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
const AvatarTest = () => (
  <Space direction="vertical" size={16}>
    <Space wrap size={16}>
      <Avatar size={80} icon={<UserOutlined />} />
    </Space>
  </Space>
);
export default AvatarTest;