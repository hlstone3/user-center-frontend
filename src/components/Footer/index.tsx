import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-components';

const Footer: React.FC = () => {
  const defaultMessage = 'STONE集团技术部出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'STONE',
          title: 'STONE官网',
          href: '#',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined/>,
          href: '#',
          blankTarget: true,
        },
        {
          key: 'INDEX',
          title: '首页',
          href: '#',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
