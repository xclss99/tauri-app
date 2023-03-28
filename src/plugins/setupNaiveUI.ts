import type { App } from 'vue'
import {
  create,
  NEl,
  NCard,
  NIcon,
  NText,
  NMenu,
  NImage,
  NSpace,
  NAffix,
  NEmpty,
  NAvatar,
  NSwitch,
  NResult,
  NLayout,
  NButton,
  NBackTop,
  NPopover,
  NDivider,
  NEllipsis,
  NDropdown,
  NScrollbar,
  NRadioGroup,
  NRadioButton,
  NLayoutSider,
  NLayoutHeader,
  NLayoutFooter,
  NLayoutContent,
  NConfigProvider
} from 'naive-ui'

export const setupNaiveUI = (app: App<Element>): void => {
  const naive = create({
    components: [
      NEl,
      NCard,
      NIcon,
      NText,
      NMenu,
      NImage,
      NSpace,
      NAffix,
      NEmpty,
      NAvatar,
      NSwitch,
      NResult,
      NLayout,
      NButton,
      NBackTop,
      NPopover,
      NDivider,
      NEllipsis,
      NDropdown,
      NScrollbar,
      NRadioGroup,
      NRadioButton,
      NLayoutSider,
      NLayoutHeader,
      NLayoutFooter,
      NLayoutContent,
      NConfigProvider
    ]
  })
  app.use(naive)
}
