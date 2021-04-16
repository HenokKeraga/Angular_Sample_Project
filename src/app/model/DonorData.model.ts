export class DonorDataModel {

  constructor(private name: String, private imageUrl: string,
              private description: string,
              private amount: string) {
  }
  get donorName(){
    return this.name;
  }
  get donorImageUrl(){
    return this.imageUrl;
  }
  get donorDescription(){
    return this.description;
  }
  get donorAmount(){
    return this.amount;
  }


}
