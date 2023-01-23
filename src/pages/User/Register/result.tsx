import { history, useParams } from '@umijs/max';
import { Button, Result } from 'antd';
import React from 'react';
import { Link } from 'umi';

import { PageContainer } from '@ant-design/pro-components';
import styles from './style.less';

const actions = (
  <div className={styles.actions}>
    <Link to="/login">
      <Button size="large" type="primary">
        <span>Login</span>
      </Button>
      </Link>
    <Link to="/">
      <Button size="large">Home</Button>
    </Link>
  </div>
);

type ResultParams = {
  email: string;
};

const RegisterResult: React.FC = () => {
  const params = useParams<ResultParams>();
  
  if (!params.email) {
    history.push("/");
    return <></>;
  }

  const email = params.email;

  return (
    <PageContainer>
      <Result
        className={styles.registerResult}
        status="success"
        title={
          <div className={styles.title}>
            <span>{email}</span>
          </div>
        }
        subTitle="Your account has successfully been created! Please check your email for the activation code."
        extra={actions}
      />
    </PageContainer>
  );
};

export default RegisterResult;
