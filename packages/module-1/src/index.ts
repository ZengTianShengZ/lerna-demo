

interface IUser{
  name: string,
  province: string,
  city: string
}

export const getUser = () => {
  return {
    name: 'tiansheng11',
    province: 'fujian',
    city: 'xiamen'
  }
}

export const getUserid = () => {
  return 'xxxx'
}