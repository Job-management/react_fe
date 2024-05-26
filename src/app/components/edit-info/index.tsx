import { CopyOutlined, LockOutlined, SaveOutlined } from '@ant-design/icons';
import ChangePassword from '@components/change-password';
import { FormDatePicker, FormInput } from '@components/form';
import { useUser } from '@store/user/user.selector';
import { Button, Upload } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { WrapperStyled } from './styled';
import moment from 'moment';

const EditInfo = () => {
  const { profile, onGetProfile, onUpdateProfile } = useUser();
  const { id } = useParams();
  const [isShowChangePassword, setIsShowChangePassword] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [imageUrl, setImageUrl] = useState<string>(profile?.avatar?.url);
  const form = useForm<Types.IUpdateUserInfo>();
  const { handleSubmit } = form;

  useEffect(() => {
    if (!id) return;
    onGetProfile(id);
  }, []);

  const onUpdateUserInfo = useCallback(
    (data: Types.IUpdateUserInfo) => {
      const filteredData = Object.keys(data).reduce((acc, key) => {
        const typedKey = key as keyof Types.IUpdateUserInfo;
        if (data[typedKey]) {
          acc[typedKey] = data[typedKey];
        }
        return acc;
      }, {} as Types.IUpdateUserInfo);

      onUpdateProfile(filteredData);
    },
    [onUpdateProfile],
  );

  return (
    <>
      {isShowChangePassword && <ChangePassword setIsShowChangePassword={setIsShowChangePassword} />}
      <FormProvider {...form}>
        <WrapperStyled onSubmit={handleSubmit(onUpdateUserInfo)}>
          <div className="header">
            <h2>Tài khoản</h2>
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
            <h2>Basic Info</h2>
            <div className="basic-info__container">
              <div className="user_info">
                <div className="avatar">
                  <Upload
                    name="avatar"
                    listType="picture-circle"
                    className="avatar-uploader"
                    showUploadList={false}>
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt="avatar"
                        style={{ width: '100%' }}
                      />
                    ) : (
                      <></>
                    )}
                  </Upload>
                </div>
                <div className="info">
                  <h3>{profile?.name}</h3>
                  <p className="id">
                    ID: {profile?.id} <CopyOutlined className="cursor-pointer" />
                  </p>
                  <div
                    className="change__password"
                    onClick={() => setIsShowChangePassword(true)}>
                    <LockOutlined /> Change password
                  </div>
                </div>
              </div>
              <div className="edit-container">
                <div className="row1">
                  <div className="field">
                    <FormInput
                      name="name"
                      label="Name"
                      className="field"
                      value={profile?.name}
                    />
                  </div>
                  <div className="field">
                    <FormDatePicker
                      name="birthday"
                      label="birthday"
                      className="field"
                      value={moment(profile?.birthday)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="basic-info mt-7">
            <h2>Contact</h2>
            <div className="basic-info__container">
              <div className="edit-container">
                <div className="row1">
                  <div className="field">
                    <FormInput
                      name="phone"
                      label="Phone"
                      className="field"
                      placeholder="+84 xxx xxx xxx"
                      value={profile?.phone}
                    />
                  </div>
                  <div className="field">
                    <FormInput
                      name="email"
                      label="email"
                      className="field"
                      readOnly
                      value={profile?.email}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </WrapperStyled>
      </FormProvider>
    </>
  );
};

export default EditInfo;
