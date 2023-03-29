import type { App } from 'vue'
import {
  create,
  NEl,
  NTabs,
  NCard,
  NIcon,
  NText,
  NMenu,
  NModal,
  NInput,
  NImage,
  NSpace,
  NAffix,
  NEmpty,
  NSelect,
  NAvatar,
  NSwitch,
  NResult,
  NLayout,
  NButton,
  NBackTop,
  NPopover,
  NDivider,
  NTabPane,
  NEllipsis,
  NDropdown,
  NScrollbar,
  NInputGroup,
  NRadioGroup,
  NRadioButton,
  NLayoutSider,
  NLayoutHeader,
  NLayoutFooter,
  NLayoutContent,
  NDialogProvider,
  NConfigProvider
} from 'naive-ui'

export const setupNaiveUI = (app: App<Element>): void => {
  const naive = create({
    components: [
      NEl,
      NTabs,
      NCard,
      NIcon,
      NText,
      NMenu,
      NModal,
      NInput,
      NImage,
      NSpace,
      NAffix,
      NEmpty,
      NAvatar,
      NSelect,
      NSwitch,
      NResult,
      NLayout,
      NButton,
      NBackTop,
      NPopover,
      NDivider,
      NTabPane,
      NEllipsis,
      NDropdown,
      NScrollbar,
      NInputGroup,
      NRadioGroup,
      NRadioButton,
      NLayoutSider,
      NLayoutHeader,
      NLayoutFooter,
      NLayoutContent,
      NDialogProvider,
      NConfigProvider
    ]
  })
  app.use(naive)
}
