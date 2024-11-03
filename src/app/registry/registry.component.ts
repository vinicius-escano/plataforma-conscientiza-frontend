import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EnumOrigemAcesso, EnumTipoAparelho, Registro } from '../entities/registry-dto';
import { CommonModule } from '@angular/common';
import { ApiService } from '../entities/api-service';
import { DataDTO } from '../entities/analisys-data-dto';

@Component({
  selector: 'app-registry-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registry.component.html',
  styleUrl: './registry.component.css'
})
export class RegistryFormComponent {
  registryForm: FormGroup;
  tiposAparelho = EnumTipoAparelho;
  origensAcesso = EnumOrigemAcesso;

  constructor(private apiService: ApiService,private fb: FormBuilder) {
    this.registryForm = this.fb.group({
      navegador: ['', Validators.required],
      horarioAcesso: [new Date(), Validators.required], // Valor padrão para a data
      idade: ['', [Validators.required, Validators.min(0)]],
      tipoAparelho: ['', Validators.required],
      origemAcesso: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registryForm.valid) {
      const registro: Registro = {
        id: this.generateUUID(),
        ...this.registryForm.value
      };
      this.apiService.postData(registro).subscribe();
      // Aqui você pode enviar o registro para um serviço, por exemplo
    }
  }

  private generateUUID(): string {
    // Função simples para gerar um UUID
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r % 4 + 8);
      return v.toString(16);
    });
  }
}