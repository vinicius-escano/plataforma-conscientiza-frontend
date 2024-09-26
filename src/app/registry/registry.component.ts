// registry.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Registry } from './registry.model';
import { RegistryService } from './registry.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class RegistryComponent implements OnInit {

  registries: Registry[] = [];
  registryForm!: FormGroup;

  constructor(private registryService: RegistryService) { }

  ngOnInit(): void {
    this.registryService.getAllRegistries().subscribe(registries => {
      this.registries = registries;
    });
    this.registryForm = new FormGroup({
      id: new FormControl(''),
      navegador: new FormControl('', Validators.required),
      horarioAcesso: new FormControl('', Validators.required),
      tipoAparelho: new FormControl('', Validators.required),
      origemAcesso: new FormControl('', Validators.required)
    });
  }

  createRegistry(): void {
    const registry = this.registryForm.value;
    this.registryService.createRegistry(registry).subscribe(() => {
      this.registries.push(registry);
      this.registryForm.reset();
    });
  }

  updateRegistry(registry: Registry): void {
    this.registryService.updateRegistry(registry).subscribe(() => {
      const index = this.registries.findIndex(r => r.id === registry.id);
      this.registries[index] = registry;
    });
  }

  deleteRegistry(id: string): void {
    this.registryService.deleteRegistry(id).subscribe(() => {
      const index = this.registries.findIndex(r => r.id === id);
      this.registries.splice(index, 1);
    });
  }

}