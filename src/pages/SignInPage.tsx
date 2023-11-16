import { Gradient } from '../components/Gradient'
import { Icon } from '../components/Icon'
import { Input } from '../components/Input'
import { TopNav } from '../components/TopNav'

export const SignInPage: React.FC = () => {
  const sendCmsCode = async () => {}
  return (
    <>
      <Gradient>
        <TopNav icon="" title="登录" />
      </Gradient>
      <div text-center pt-40px pb-16px>
        <Icon name="logo" className='w-64px h-68px' />
        <h1 text-32px text="#7878FF" font-bold>山竹记账</h1>
      </div>
      <form j-form>
        <Input label="邮箱地址" placeholder="请输入邮箱, 然后点击发送验证码" />
        <Input label="验证码" type="sms_code" placeholder="六位数字" request={sendCmsCode} />
        <div mt-100px>
          <button j-btn type="submit">
            登录
          </button>
        </div>
      </form>
    </>
  )
}
