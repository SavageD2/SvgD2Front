export interface Item {

    displayProperties: DisplayProperties,
    tooltipNotifications: [],
    iconWatermark: string,
    iconWatermarkShelved: string,
    backgroundColor: BackgroundColor[],
    screenshot: string,
    itemTypeDisplayName: string,
    flavorText: string,
    uiItemTypeDisplayStyle: string,
    itemTypeAndTierDisplayName: string,
    displaySource: string,
    action: Action[],
    inventory: Inventory[],
    stats: Stats[],
    equippingBlock: EquippingBlock[],
    translationBlock: TranslationBlock[],
    preview: Preview[],
    quality: Quality[],
    acquireRewoardSiteHash: number,
    acquireUnlockHash: number,
    sockets: Sockets[],
    talentGrid: TalentGrid[],
    investmentStats: InvestmentStats[],
    perks: Perks[]
    loreHash: number,
    allowActions: boolean,
    doesPostmasterPullHaveSideEffects: boolean,
    nonTransferrable: boolean,
    itemCategoryHashes: ItemCategoryHashes[],
    specialItemType: number,
    itemType: number,
    itemSubType: number,
    classType: number,
    breakerType: number,
    equippable: boolean,
    damageTypeHashes: DamageTypeHashes[],
    damageType: DamageTypes[],
    defaultDamageType: number,
    defaultDalageTypeHash: number,
    isWrapper: boolean,
    traitIds: TraitIds[],
    traitHashes: TraitHashes[],
    hash: number,
    index: number,
    redacted: boolean,
    blacklisted: boolean

}

export interface DisplayProperties {
    description: string,
    name: string,
    icon: string,
    hasIcon: boolean
}

export interface BackgroundColor {
    red: number,
    green: number,
    blue: number,
    alpha: number,
}

export interface Action {
verbName: string,
verbDescription: string,
isPositive: boolean,
requiredCooldownSeconds: number,
requiredItems: [],
progressionRewards: []
actionTypeLabel: string,
rewardSheetHash: number,
rewardItemHash: number,
rewardSiteHash: number,
requiredCooldownHash: number,
deleteOnAction: boolean,
consumeEntireStack: boolean,
useOnAcquire: boolean,
}

export interface Inventory {
maxStackSize: number,
bucketTypeHash: number,
recoveryBucketTypeHash: number,
tierTypeHash: number,
isInstanceItem: boolean,
nonTransferrableOriginal: boolean,
tierTypeName: string,
tierType: number,
expirationTooltip: string,
expiredInActivityMessage: string,
expiredInOrbitMessage: string,
suppressExpirationWhenObjectivesComplete: boolean,
}

export interface Stats{
disablePrimaryStatDisplay: boolean,
statGroupHash: number,
stats: []
hasDisplayableStats: boolean,
primaryBaseStatHash: boolean
} 

export interface EquippingBlock {
    uniqueLabelHash: number,
    equipmentSlotTypeHash: number,
    attributes: [],
    equippingSoundHash: number,
    hornSoundHash: number,
    ammoType: number,
}

export interface TranslationBlock {
weaponPatternHash: number,
defaultDyes:[],
lockedDyes:[],
customDyes:[],
arrangements:[],
hasGeometry: boolean,
}

export interface Preview {
    screenStyle: number,
    previewVendorHash: number,
    previewActionString: string,
}

export interface Quality {
itemLevels:[],
qualityLevel: number,
infusionCategoryName: string,
infusionCategoryHash: number,
infusionCategoryHashes:[],
progressionLevelRequirementHash: number,
currentVersion: number,
versions:[],
displayVersionWatermarkIcons:[],
}

export interface Sockets {
detail: string,
socketEntries:[],
intrinsicSockets:[],
socketCategories:[]
}

export interface TalentGrid {
talentGridHash: number,
itemDetailString: string,
hudDamageType: number,
}

export interface InvestmentStats {
    [key: string]: any[];
}

export interface Perks {
requirementDisplayString: string,
perkHash: number,
perkVisibility: number,
}

export interface ItemCategoryHashes {
    [key: number]: number;
}

export interface DamageTypeHashes {
    [key: number]: number;
}

export interface DamageTypes {
    [key: number]: number;
}

export interface TraitIds {
    [key: string]: string;
}

export interface TraitHashes {
    [key: number]: number;
}

export interface Collectible {
    id: number;
    json: {
        displayProperties: DisplayProperties,
        scope: number,
        sourceString: string,
        sourceHash: number,
        itemHash: number,
        presentationNodeType: number,
        traitIds: TraitIds,
        traitHashes: TraitHashes,
        parentNodeHashes: number[],
        hash: number,
        index: number,
    };
}
