import { Base, Events, Procedures } from "../utils/apx";

RPC.register('sil-laptop:fetchBennysData', async (source: number ) => {
    let bennysCat = await SQL.execute("SELECT * FROM bennysitems")
    console.log(JSON.stringify(bennysCat))
    return bennysCat
})

RPC.register('sil-laptop:purchaseBennysItems', async (source: number, items: any, price: number, cid: number) => {
    console.log(source,items,price)

    await items.forEach(async (item: any) => {
        console.log(item.item)

        await SQL.execute('INSERT INTO `bennys_orders` (`stateid`, `item_id`, `amount`) VALUES (@StateID, @ItemID, @amount)', {
            ['@StateID']: cid,
            ['@ItemID']: item.item,
            ['@amount']: 1
        })

        await SQL.execute("UPDATE bennysitems SET stock = stock - @amount WHERE spawncode = @itemid", {
            ["amount"]: 1,
            ["itemid"]: item.item
        })

    })
    
  return true
})