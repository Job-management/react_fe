import { WrapperStyled } from './styled';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { TFunction } from 'i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInput } from '@components';
import { useTranslation } from 'react-i18next';

const schema = (t: TFunction) =>
  yup.object().shape({
    email: yup
      .string()
      .email(
        t('error_message:validation.invalid_email', {
          key: t('common:auth.email'),
        }),
      )
      .trim()
      .required(
        t('error_message:validation.required', {
          key: t('common:auth.email'),
        }),
      )
      .max(
        200,
        t('error_message:validation.max_length', {
          key: t('common:auth.email'),
          max: 200,
        }),
      ),
  });

const MailSubscribe = () => {
  const { t } = useTranslation(['common']);
  const form = useForm<{ email: string }>({
    resolver: yupResolver(schema(t)),
  });
  const { handleSubmit: handleSubmitSubscribe } = form;
  const onSubmitSubscribe = () => {};
  return (
    <WrapperStyled className="form-email-get-job lazy-bg">
      <div className="container">
        <div className="cb-title">
          <h2>Đăng ký theo dõi để nhận cập nhật về cơ hội việc làm mới và phù hợp nhất</h2>
        </div>
        <FormProvider {...form}>
          <form
            method="get"
            className="subscribe-form"
            onSubmit={handleSubmitSubscribe(onSubmitSubscribe)}>
            <FormInput
              type="text"
              name="email"
              className="input-mail"
              placeholder="Nhập địa chỉ email của bạn"
            />
            <button
              type="submit"
              className="btn-subscribe">
              <span className="mdi mdi-pencil"></span>ĐĂNG KÝ NGAY
            </button>
          </form>
        </FormProvider>
      </div>
    </WrapperStyled>
  );
};

export default MailSubscribe;
