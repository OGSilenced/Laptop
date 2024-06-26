//import { APX } from "../typings/apx";

declare const APX: APXType;

export const Events = {
    on: (event: string, callback: Function) => {
        return APX.Events.on(event, callback);
    },
    onNet: (event: string, callback: Function) => {
        return APX.Events.onNet(event, callback);
    },
    emit: (event: string, ...args: any[]) => {
        return APX.Events.emit(event, ...args);
    },
    emitNet: (event: string, ...args: any[]) => {
        return APX.Events.emitNet(event, ...args);
    },
    remove: (event: string, callback: Function) => {
        return APX.Events.remove(event, callback);
    }
}

export const Procedures = {
    register: (name: string, callback: Function) => {
        return APX.Procedures.register(name, callback);
    },
    execute: (name: string, ...args: any[]) => {
        return APX.Procedures.execute(name, ...args);
    }
}

export const Utils = {
    cache: (callback: any, options: any) => {
        return APX.Utils.cache(callback, options);
    },
    cacheableMap: (callback: any, options: any) => {
        return APX.Utils.cacheableMap(callback, options);
    },
    waitForCondition: (condition: any, timeout: number) => {
        return APX.Utils.waitForCondition(condition, timeout);
    },
    getMapRange: (p1: any, p2: any, p3:any) => {
        return APX.Utils.getMapRange(p1, p2, p3);
    },
    getDistance: ([x1, y1, z1]: number[], [x2, y2, z2]: number[]) => {
        return APX.Utils.getDistance([x1, y1, z1], [x2, y2, z2]);
    },
    getRandomNumber: (min: number, max: number) => {
        return APX.Utils.getRandomNumber(min, max);
    }
}

export const Base = {
    getModule:<T>(pModule: string): any => {
        switch (pModule) {
            case "Player":
                return {
                    GetUser: (pSource: number): User => {
                        const user = global.exports["arp-base"].getModule(pModule).GetUser(this, pSource);
                        if (!user) return false as any;
                        return {
                            source: user.source,
                            name: user.name,
                            comid: user.comid,
                            steamid: user.steamid,
                            hexid: user.hexid,
                            license: user.license,
                            ip: user.ip,
                            job: user.job,
                            rank: user.rank,
                            character: user.character,
                            characters: user.characters,
                            characterLoaded: user.characterLoaded,
                            charactersLoaded: user.charactersLoaded,
                            getVar: (pVar: string) => {
                                return user.getVar(user, pVar);
                            },
                            setVar: (pVar: string, pValue: any) => {
                                return user.setVar(user, pVar, pValue);
                            },
                            networkVar: (pVar: string, pValue: any) => {
                                return user.networkVar(user, pVar, pValue);
                            },
                            getRank: () => {
                                return user.getRank(user);
                            },
                            setRank: (pRank: string) => {
                                return user.setRank(user, pRank);
                            },
                            setCharacter: (pCharacter: Character) => {
                                return user.setCharacter(user, pCharacter);
                            },
                            setCharacters: (pCharacters: Character[]) => {
                                return user.setCharacters(user, pCharacters);
                            },
                            getCash: () => {
                                return user.getCash(user);
                            },
                            getBalance: () => {
                                return user.getBalance(user);
                            },
                            getDirtyMoney: () => {
                                return user.getDirtyMoney(user);
                            },
                            getGangType: () => {
                                return user.getGangType(user);
                            },
                            getStressLevel: () => {
                                return user.getStressLevel(user);
                            },
                            getJudgeType: () => {
                                return user.getJudgeType(user);
                            },
                            alterDirtyMoney: (pAmount: number) => {
                                return user.alterDirtyMoney(user, pAmount);
                            },
                            alterStressLevel: (pAmount: number) => {
                                return user.alterStressLevel(user, pAmount);
                            },
                            resetDirtyMoney: () => {
                                return user.resetDirtyMoney(user);
                            },
                            addMoney: (pAmount: number) => {
                                const prevCash = user.getCash(user);
                                user.addMoney(user, pAmount);

                                const newUser = global.exports["arp-base"].getModule(pModule).GetUser(this, pSource);
                                const newCash = newUser.getCash(newUser);

                                //Check if the money was added
                                if (newCash >= prevCash) {
                                    return true;
                                } else {
                                    return false;
                                }
                            },
                            removeMoney: (pAmount: number) => {
                                const prevCash = user.character.cash;
                                user.removeMoney(user, pAmount);

                                const newUser = global.exports["arp-base"].getModule(pModule).GetUser(this, pSource);
                                const newCash = newUser.getCash(newUser);

                                //Check if the money was removed
                                if (newCash <= prevCash) {
                                    return true;
                                } else {
                                    return false;
                                }
                            },
                            addBank: (pAmount: number) => {
                                const prevBalance = user.getBalance(user);
                                user.addBank(user, pAmount);

                                const newUser = global.exports["arp-base"].getModule(pModule).GetUser(this, pSource);
                                const newBalance = newUser.getBalance(newUser);

                                //Check if the money was added
                                if (newBalance >= prevBalance) {
                                    return true;
                                } else {
                                    return false;
                                }
                            },
                            removeBank: (pAmount: number) => {
                                const prevBalance = user.getBalance(user);
                                user.removeBank(user, pAmount);

                                const newUser = global.exports["arp-base"].getModule(pModule).GetUser(this, pSource);
                                const newBalance = newUser.getBalance(newUser);

                                //Check if the money was removed
                                if (newBalance <= prevBalance) {
                                    return true;
                                } else {
                                    return false;
                                }
                            },
                            getNumCharacters: () => {
                                return user.getNumCharacters(user);
                            },
                            ownsCharacter: (pCharacterId: number) => {
                                return user.ownsCharacter(user, pCharacterId);
                            },
                            getGender: () => {
                                return user.getGender(user);
                            },
                            getCharacter: (pCharacterId: number) => {
                                return user.getCharacter(user, pCharacterId);
                            },
                            getCharacters: () => {
                                return user.getCharacters(user);
                            },
                            getCurrentCharacter: () => {
                                return user.getCurrentCharacter(user);
                            }
                        }
                    }
                }
        }
    }
}