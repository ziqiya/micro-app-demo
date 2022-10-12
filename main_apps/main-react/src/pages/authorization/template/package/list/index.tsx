/*
 * @文件描述: 模板套餐
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2022-07-19 15:52:41
 * @LastEditors: 仇艳
 * @LastEditTime: 2022-10-12 10:48:29
 */
import { useRef } from 'react';
import { Tag, Image, Button, Spin } from 'antd';
import ProForm, { ProFormSelect, ProFormText } from '@ant-design/pro-form';
import { TEMPLATE_CLIENT_ENUM, TEMPLATE_STATUS_COLOR_MAP, TEMPLATE_STATUS_MAP } from '@/constant';
import styles from './index.module.less';
import useTemplatePackageListService from './useTemplatePackageListService';
import CreateModal from '../components/CreateModal';
import PreviewModal from '../components/PreviewModal';
import { QuestionCircleOutlined, ReloadOutlined } from '@ant-design/icons';
import { enumToValueEnum } from '@/utils/array';
import { FormInstance } from 'antd/es/form';
import MarkdownViewModal from '../components/MarkdownViewModal';

export default () => {
  const formRef = useRef<FormInstance>();
  const {
    margin,
    loading,
    selectedItem,
    list,
    createModalConfig,
    previewModalConfig,
    templateAuthMap,
    markDownConfig,
    fetchList,
    handleModalHide,
    setSelected,
    handleCreateTemplate,
    handlePreviewTemplate,
    handleViewMarkDown,
    handleTemplateRetry,
    getRef,
  } = useTemplatePackageListService();

  return (
    <div className={styles.container}>
      <div
        style={{
          margin: 24,
          backgroundColor: 'white',
        }}
      >
        <ProForm
          className={styles.proForm}
          formRef={formRef}
          onFinish={fetchList}
          layout="inline"
          submitter={{
            render: () => (
              <div className={styles.fromBtnList}>
                <Button style={{ marginRight: 10 }} htmlType="reset" onClick={() => fetchList({})}>
                  重置
                </Button>
                <Button type="primary" htmlType="submit">
                  查询
                </Button>
              </div>
            ),
          }}
        >
          <ProFormText name="keyword" label="关键字" width="md" />
          <ProFormSelect
            name="clientKey"
            label="子系统"
            showSearch
            valueEnum={enumToValueEnum(TEMPLATE_CLIENT_ENUM)}
            width="md"
          />
          <ProFormSelect
            name="status"
            label="状态"
            showSearch
            valueEnum={enumToValueEnum(TEMPLATE_STATUS_MAP)}
            width="md"
          />
        </ProForm>
      </div>
      <Spin spinning={loading}>
        <div className={styles.content}>
          <div className={styles.title}>
            模板套餐 &nbsp;&nbsp;
            <ReloadOutlined onClick={() => fetchList()} />
          </div>
          <div className={styles.item} ref={getRef}>
            {list?.map((item, index) => (
              <div
                className={styles.card}
                key={index}
                tabIndex={index}
                onMouseMove={() => setSelected(item?.id!)}
                onMouseLeave={() => setSelected('')}
                style={{ marginRight: margin, marginLeft: margin }}
              >
                <div className={styles.imageDiv}>
                  <Image
                    className={styles.image}
                    preview={false}
                    src={item.picture}
                    key={index}
                    style={
                      selectedItem === item.id
                        ? { opacity: '0.19', filter: 'alpha(opacity=19)' }
                        : {}
                    }
                  />

                  {selectedItem === item.id && (
                    <div>
                      <span
                        className={styles.guide}
                        onClick={() => handleViewMarkDown(item?.name!, item?.guideUrl!)}
                      >
                        <QuestionCircleOutlined />
                        模板指南
                      </span>

                      <div className={styles.optBtn}>
                        {templateAuthMap['模板预览'] && (
                          <Button
                            type="primary"
                            style={{ marginRight: 10 }}
                            ghost={item.status === TEMPLATE_STATUS_MAP.未创建}
                            onClick={() => handlePreviewTemplate({ packageId: item.id! })}
                          >
                            预览
                          </Button>
                        )}
                        {item.status === TEMPLATE_STATUS_MAP.未创建 && templateAuthMap['模板创建'] && (
                          <Button
                            type="primary"
                            onClick={() => handleCreateTemplate({ packageId: item.id! })}
                          >
                            创建
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className={styles.cardHeader}>
                  <div className={styles.cardTitle}>{item.name}</div>
                  <div
                    className={styles.status}
                    style={{ color: TEMPLATE_STATUS_COLOR_MAP[item?.status!] }}
                  >
                    {TEMPLATE_STATUS_MAP[item?.status!]}
                  </div>
                </div>
                <div className={styles.desc}>{item.description}</div>
                <div className={styles.systemTag}>
                  {item?.clientKeyList?.map((term: any) => (
                    <Tag color="#33457A" key={term}>
                      {enumToValueEnum(TEMPLATE_CLIENT_ENUM)[term]?.text}
                    </Tag>
                  ))}
                </div>
                <div>
                  {item?.tags &&
                    JSON.parse(item?.tags || '[]')?.map((term: string) => (
                      <Tag className={styles.featureTag} key={term}>
                        {term}
                      </Tag>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <CreateModal
          visible={createModalConfig.visible}
          data={createModalConfig.data}
          loading={createModalConfig.loading}
          toggleVisible={() => handleModalHide('create')}
          reload={() => fetchList(formRef?.current?.getFieldsValue())}
          handleTemplateRetry={handleTemplateRetry}
          templateAuthMap={templateAuthMap}
        />
        <PreviewModal
          visible={previewModalConfig.visible}
          loading={previewModalConfig.loading}
          data={previewModalConfig.data}
          toggleVisible={() => handleModalHide('preview')}
          templateAuthMap={templateAuthMap}
        />
        <MarkdownViewModal
          visible={markDownConfig.visible}
          data={markDownConfig.data}
          toggleVisible={() => handleModalHide('markdown')}
        />
      </Spin>
    </div>
  );
};
