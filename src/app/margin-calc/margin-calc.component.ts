import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-margin-calc',
  templateUrl: './margin-calc.component.html',
  styleUrls: ['./margin-calc.component.css']
})
export class MarginCalcComponent implements OnInit {

  tabNumber: number= 0;
  selectedContractType:any;
  useDecimal:boolean=true;
  DealLabel:any='Actual Pay Rate/Hour';
  CalculateFlagPR:boolean=true;


  ngOnInit(): void {
    
  
    
  }
  onChangeTab(tab:any){
    this.tabNumber= tab;
  }

  onChangeContractType(selectedType: any){
    if(this.selectedContractType === 'DeelEOR') {
      this.useDecimal=false;
      this.DealLabel='Actual Annual Salary';
    }else{
      this.DealLabel='Actual Annual Salary';
      this.useDecimal=true;
    }
    this.CalculateFlagPR=false;
  }

  onInputChangeNo(event: Event){
    const input =event.target as HTMLInputElement;
    const inputValue = input.value;

    const numericValue = inputValue.replace(/[^\d.]/g, '');

    const [integerPart, decimalPart] = numericValue.split('.');
    let decimalcount=0
    if(this.useDecimal){
      decimalcount=3;
    }
    else{
      decimalcount=6;
    }
    // const trunkatedValue =integerPart.slice(0, decimalcount) + (decimalPart ? `.$:`:);

  }
  ResetCalculator(PR:any){
    

  }

  
}
