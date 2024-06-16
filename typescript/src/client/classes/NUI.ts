import { Delay } from "../utils/misc";

export class NUI {
    static open = false;

    static ATTACHED_TABLET: number = 0;

    static async PlayTabletAnimation() {
        if (this.ATTACHED_TABLET) return;

        const Player = PlayerPedId();
        RequestAnimDict("amb@world_human_seat_wall_tablet@female@base");
        while (!HasAnimDictLoaded("amb@world_human_seat_wall_tablet@female@base")) {
            await Delay(0)//Delay(0);
        }

        // attach the tablet to the player
        const tablet = CreateObject(GetHashKey("prop_cs_tablet"), 0, 0, 0, true, true, true);
        this.ATTACHED_TABLET = tablet;
        AttachEntityToEntity(tablet, Player, GetPedBoneIndex(Player, 28422), 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, false, false, false, false, 2, true);
        TaskPlayAnim(Player, "amb@world_human_seat_wall_tablet@female@base", "base", 8.0, 8.0, -1, 49, 0, false, false, false);
    }

    static async StopTabletAnimation() {
        const Player = PlayerPedId();
        ClearPedTasks(Player);
        DeleteEntity(this.ATTACHED_TABLET);
        this.ATTACHED_TABLET = 0;
    }

    static async openUI() {
        console.log('shouldOpen')
        this.open = true;
        
        await this.PlayTabletAnimation();
        
        SetNuiFocus(true, true);
        SetCursorLocation(0.5, 0.5)

        this.sendReactMessage("setVisible", true);
    }

    static closeUI() {
        this.open = false;

        this.StopTabletAnimation();

        this.sendReactMessage("setVisible", false);
        SetNuiFocus(false, false);
    }

    static sendReactMessage(action: string, data: object | boolean | string | number) {
        SendNuiMessage(
            JSON.stringify({
                action: action,
                data: data,
            })
        );
    }
}