/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxa56b1db157f92e5a',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'c35d1d78c8a8d93465d31e8285915d0a',

  PROVINCE: '江苏',
  CITY: '镇江',

  USERS: [
    {
      // 想要发送的人的名字
      name: 'bury',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'osfBd5qfRv2dj0eo8_I9vsaF5ilQ',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'eVAFcU61FA6NjYySI_yS4zm9thfZg--YxYM323i_n14',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-10',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '猪猪宝贝', year: '1996', date: '12-10',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '猪猪宝贝', year: '1996', date: '12-10',
        },
        {
          type: '节日', name: '我们在一起', year: '2021', date: '05-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-05-04' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
     {
      // 想要发送的人的名字
      name: '猪猪宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'osfBd5kd5wch1HIBuWtt3luO1kco',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'eVAFcU61FA6NjYySI_yS4zm9thfZg--YxYM323i_n14',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '06-01',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '猪猪宝贝', year: '1997', date: '04-26',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '猪猪宝贝', year: '1997', date: '06-01',
        },
        {
          type: '节日', name: '我们在一起', year: '2021', date: '05-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-05-04' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'XGGsF7urQpUD97NqDx1va-yUUghS6-gCaFxjzJZ9oJk',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'osfBd5qfRv2dj0eo8_I9vsaF5ilQ',
    }
  ],

}

module.exports = USER_CONFIG

