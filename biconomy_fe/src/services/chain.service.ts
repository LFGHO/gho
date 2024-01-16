export default class ChainService {
  private static instance: ChainService;
  private _chainId: number;
  private constructor() {
    // this._chainId = ChainId.POLYGON_MUMBAI;
    this._chainId = 11155111;
  }
  public static getInstance(): ChainService {
    if (!ChainService.instance) {
      ChainService.instance = new ChainService();
    }
    return ChainService.instance;
  }

  public get chainId(): number {
    return this._chainId;
  }

  public setChainId(chainId: number): void {
    this._chainId = chainId;
  }
}
