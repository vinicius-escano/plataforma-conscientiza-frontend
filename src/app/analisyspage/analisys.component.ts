import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { ApiService } from '../entities/api-service';
import { DataDTO } from '../entities/analisys-data-dto';
import { RegistryFormComponent } from '../registry/registry.component';

@Component({
  selector: 'app-analisys',
  standalone: true,
  imports: [ChartModule, RegistryFormComponent],
  templateUrl: './analisys.component.html',
  styleUrl: './analisys.component.css'
})
export class AnalisysComponent implements OnInit {

  dataDto: any;
  dataAccess: any;
  dataAge: any;
  options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
      }
    }
  }

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getData();
  }

  private getData(){
    this.apiService.getData().subscribe(
      (data: DataDTO[]) => {
        this.dataDto = data;
        this.setAccessData();
        this.setAgeData();
      },
      (error) => {
        console.error('Erro ao obter dados da API', error);
      }
    );
  }

  private setAccessData() {
    let dataOriginAccess: Number[] = [];
    let dataOriginLabels: String[] = ['Email', 'Mensagem', 'QR Code'];
    this.dataDto.dataOriginSource.forEach((item: { value: Number; type: String; }) => {
      dataOriginAccess.push(item.value)
    });

    this.dataAccess = {
      labels: dataOriginLabels,
      datasets: [{
        data: dataOriginAccess, // Dados do gráfico
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }]
    };
  }

  private setAgeData() {
    let dataAgeValue: Number[] = [];
    let dataAgeLabels: String[] = ['> 18', '19 a 30', '31 a 50', '51+'];
    this.dataDto.dataAge.forEach((item: { value: Number; interval: String; }) => {
      dataAgeValue.push(item.value)
    });
    this.dataAge = {
      labels: dataAgeLabels,
      datasets: [{
        data: dataAgeValue, // Dados do gráfico
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(255, 102, 86, 0.8)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 102, 86, 1)'
        ],
        borderWidth: 1
      }]
    };
  }

}
