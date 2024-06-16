import { NUI } from "../classes/NUI";
import "./cl_nuicallbacks";


on('arp-inventory:itemUsed', (pItem: any, pInfo: any) => {
  if (pItem !== 'pixellaptop') {
      return
  }
  NUI.openUI()
})

