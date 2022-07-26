import React, { useEffect } from 'react';
import { Modal, Form, Spin, Input, message, TreeSelect } from 'antd';
import { isEmpty, isNil } from 'lodash-es';
import 'antd/lib/form';
import { Store } from 'antd/es/form/interface';
import { useRequest } from 'ahooks';
import useSpinning from '@/hooks/useSpinning';
import { DataNode } from 'antd/lib/tree';

const treeData: DataNode[] = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' },
        ],
      },
      {
        title: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      { title: '0-1-0-0', key: '0-1-0-0' },
      { title: '0-1-0-1', key: '0-1-0-1' },
      { title: '0-1-0-2', key: '0-1-0-2' },
    ],
  },
  {
    title: '0-2',
    key: '0-2',
  },
];

const formLayout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 20,
  },
};

const halfFormLayout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 10,
  },
};

export default ({
  visible,
  toggleVisible,
  formData,
  loading,
  reload,
}: {
  visible: boolean;
  toggleVisible: () => void;
  formData: Store;
  loading: boolean;
  reload?: () => void;
}) => {
  const [form] = Form.useForm();
  const { tip, setTip } = useSpinning();
  const { id } = formData;

  // const { data: roleList } = useRequest(API.authorization.resourceRole.resourceRoleList.fetch, {
  //   manual: true,
  // });

  useEffect(() => {
    if (!isEmpty(formData)) {
      const roleList = formData.roleList || [];
      form.setFieldsValue({
        ...formData,
        roleList: roleList.length > 0 ? roleList[0].roleId : null,
      });
    }
    // fetchRoleList({ clientKey: LOGIN_CONFIG.clientId });
    return () => {
      form.resetFields();
    };
  }, [formData]);

  const handleCancel = () => {
    toggleVisible();
    form.resetFields();
  };

  const submit = (values: Store) => {
    setTip('数据保存中，请稍候...');

    // TODO: 联调
    console.log('values: ', values);

    // const payload = {
    //   ...formData,
    //   ...values,
    //   roleList: roleList
    //     ?.filter(item => values.roleList === item.id)
    //     .map(item => ({ roleId: item.id, roleName: item.role })),
    // } as defs.platform.AddingUserAccountDTO;

    // if (formData.userCode) {
    //   return API.platform.platformUserAccountManagement.editBaseInfo.fetch({
    //     ...payload,
    //     password: payload.password ? payload.password : null,
    //   } as defs.platform.AddingUserAccountDTO);
    // }
    // return API.platform.platformUserAccountManagement.add.fetch(payload);
    return Promise.resolve();
  };

  const { run: handleFinish, loading: submitting } = useRequest(submit, {
    manual: true,
    onSuccess: () => {
      message.success('保存成功');
      form.resetFields();
      toggleVisible();
      reload?.();
    },
  });

  return (
    <Modal
      centered
      visible={visible}
      forceRender
      maskClosable={false}
      title={`${!isNil(id) ? '编辑' : '新建'}角色`}
      okButtonProps={{
        htmlType: 'submit',
      }}
      width={800}
      onOk={() => form.submit()}
      onCancel={handleCancel}
      confirmLoading={submitting}
    >
      <Spin spinning={loading && submitting} tip={tip}>
        <Form form={form} onFinish={handleFinish} {...halfFormLayout}>
          <Form.Item
            label="角色名称"
            name="account"
            rules={[
              {
                whitespace: true,
              },
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item
            label="角色描述"
            name="nickName"
            {...formLayout}
            rules={[
              {
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="请输入" />
          </Form.Item>

          <Form.Item label="拥有资源" name="email">
            <TreeSelect
              treeData={treeData}
              allowClear
              disabled={false}
              multiple
              placeholder="请选择"
              showSearch
            />
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
};