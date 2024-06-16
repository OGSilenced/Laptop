import { NUI } from "../classes/NUI";

RegisterNuiCallbackType("sil-laptop:fetchBennysData");
on("__cfx_nui:sil-laptop:fetchBennysData", async (data: any, cb: Function) => {
    console.log('bennys data')
    let consumableItems: any[] = [];
    let performanceItems: any[] = [];
    let cosmeticItems: any[] = [];

    let benny = await RPC.execute('sil-laptop:fetchBennysData')

    benny.forEach((item: any) => {
        if (item.category === 'consumable') {
          consumableItems.push(item);
        } else if (item.category === 'performance') {
          performanceItems.push(item);
        } else if (item.category === 'cosmetic') {
            cosmeticItems.push(item);
          }
      });

      console.log(JSON.stringify(performanceItems));
    console.log(JSON.stringify(benny));
    cb({consumables: consumableItems, performance: performanceItems, cosmetics: cosmeticItems, meta: {ok: true}})
    //cb("ok");
});

RegisterNuiCallbackType("sil-laptop:purchaseBennysItems");
on("__cfx_nui:sil-laptop:purchaseBennysItems", async (data: any, cb: Function) => {
  const cid = global.exports["isPed"].isPed('cid')
  console.log(data.Items, data.Price)
  let result = RPC.execute('sil-laptop:purchaseBennysItems', data.Items, data.Price, cid)
    cb({Continue: result});
});

RegisterNuiCallbackType("hideFrame");
on("__cfx_nui:hideFrame", async (data: any, cb: Function) => {
  NUI.closeUI();
});