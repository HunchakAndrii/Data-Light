import { Button } from '../Button/Button'
import { useForm } from 'react-hook-form'
import './Form.scss'
import classNames from 'classnames'

export const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      position: '',
      service: '',
      projectInfo: '',
    },
  })

return (
  <form
    className="form"
    noValidate
    onSubmit={handleSubmit(data => {
      console.log(data)
    })}
  >
    <div className="form__headline">
      <h2 className="form__title">Оставьте заявку</h2>
      <p className="form__subtitle">и наша команда свяжется с Вами!</p>
    </div>

    <div className="form__inputs">
      <div className="form__name-field">
        <input
          id="name"
          type="text"
          placeholder="Имя"
          {...register('name', { required: 'Имя обязательно' })}
          aria-invalid={errors.name ? 'true' : 'false'}
          className={classNames('form__input', {
            'form__input--error': errors.name,
          })}
        />
        {errors.name && (
          <p role="alert" className="form__error">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="form__email-field">
        <input
          id="email"
          type="email"
          placeholder="E-mail"
          {...register('email', {
            required: 'E-mail обязателен',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Некорректный E-mail',
            },
          })}
          aria-invalid={errors.email ? 'true' : 'false'}
          className={classNames('form__input', {
            'form__input--error': errors.email,
          })}
        />
        {errors.email && (
          <p role="alert" className="form__error">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="form__phone-field">
        <input
          id="phone"
          type="tell"
          placeholder="Телефон"
          {...register('phone', {
            required: 'Телефон обязателен',
            pattern: {
              value: /^(\+38)\d{10}$/,
              message:
                'Номер телефона должен начинаться с +38 и содержать 10 цыфр',
            },
          })}
          aria-invalid={errors.phone ? 'true' : 'false'}
          className={classNames('form__input', {
            'form__input--error': errors.phone,
          })}
        />
        {errors.phone && (
          <p role="alert" className="form__error">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div className="form__position-field">
        <input
          id="position"
          type="text"
          placeholder="Должность"
          {...register('position', {
            required: 'Должность обязательна',
          })}
          aria-invalid={errors.position ? 'true' : 'false'}
          className={classNames('form__input', {
            'form__input--error': errors.position,
          })}
        />
        {errors.position && (
          <p role="alert" className="form__error">
            {errors.position.message}
          </p>
        )}
      </div>

      <div className="form__select-field">
        <select
          id="service"
          {...register('service')}
          aria-invalid={errors.service ? 'true' : 'false'}
          className={classNames('form__select', {
            'form__input--error': errors.service,
          })}
        >
          <option value="">Выберите услугу</option>
          <option value="complaint">Подать жалобу</option>
          <option value="application">Оставить заявку</option>
          <option value="specialist">Вызвать специалиста</option>
        </select>
        {/* {errors.service && (
          <p role="alert" className="form__error">
            {errors.service.message}
          </p>
        )} */}
      </div>

      <textarea
        id="projectInfo"
        {...register('projectInfo')}
        placeholder="Информация о проекте"
        className="form__textarea"
      />
    </div>

    <div className="form__bottom">
      <Button btnText="Отправить заявку" type="form" className="form__btn" />
      <p className="form__text">
        Нажимая кнопку “Оставить заявку” я даю согласие на отправку и обработку
        своих персональных данных
      </p>
    </div>
  </form>
)
}
