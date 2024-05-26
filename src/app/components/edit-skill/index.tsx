import { SaveOutlined } from '@ant-design/icons';
import { FormInput } from '@components/form';
import { Button } from 'antd';
import { FormProvider, useForm } from 'react-hook-form';

import { WrapperStyled } from './styled';
const EditSkill = () => {
  const form = useForm<Types.IUpdateUserInfo>();
  const { handleSubmit } = form;

  return (
    <FormProvider {...form}>
      <WrapperStyled onSubmit={handleSubmit(() => console.log(1))}>
        <div className="header">
          <h2>Làm việc</h2>
          <div className="controller">
            <Button className="btn">Cancel</Button>
            <Button
              className="btn"
              htmlType="submit"
              type="primary"
              icon={<SaveOutlined />}>
              Save
            </Button>
          </div>
        </div>
        <section className="basic-info">
          <h2>Kinh nghiệm làm việc</h2>
          <div className="basic-info__container">
            <div className="row">
              <div className="field">
                <FormInput
                  name="name"
                  label="Lĩnh vực"
                  className="field"
                />
              </div>
              <div className="field">
                <FormInput
                  name="name"
                  label="Mức lương"
                  className="field"
                />
              </div>
            </div>
            <div className="row">
              <div className="field">
                <FormInput
                  name="name"
                  label="Kỹ năng"
                  className="field"
                />
              </div>
            </div>
            <div className="row">
              <div className="field">
                <FormInput
                  name="name"
                  label="Khu vực làm việc"
                  className="field"
                />
              </div>
              <div className="field">
                <FormInput
                  name="name"
                  label="Kinh nghiệm làm việc"
                  className="field"
                />
              </div>
            </div>
          </div>
        </section>
      </WrapperStyled>
    </FormProvider>
  );
};

export default EditSkill;
