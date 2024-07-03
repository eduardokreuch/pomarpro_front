import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrl: './cad-usuario.component.scss'
})
export class CadUsuarioComponent {

  constructor(
    private usuarioService:UsuarioService
  ){


  }

  //Inicializa o formulário
  formulario:FormGroup = new FormGroup({
    id:new FormControl(null),
    nome:new FormControl ('',Validators.required),
    sobrenome:new FormControl ('',Validators.required),
    endereco:new FormControl ('',Validators.required),
    telefone: new FormControl ('',Validators.required),
    email: new FormControl ('',Validators.required),
    login:new FormControl ('',Validators.required),
  })

  //Métodos dos controles do formulário

  onIncluir(){
   this.formulario.reset();
   this.formulario.enable();

  }

  onSalvar(){
    //Guarda as informções em uma variável para melhorar o acesso
   let info = this.formulario.value;
    //Verifica se está inserindo ou alterando com base no valor do ID (se for null, está inserindo, senão está alterando)
   if(info.id == null){
    //Irá inserir no banco de dados um usuário
    this.usuarioService.addUsuario(info).subscribe({
      next:(resposta)=>{

      },
      error:(erro)=>{
  
      }
    })
   }else{
    //Irá alterar o usuário no banco de dados
   }
   }

  
  

  onCancelar(){
   this.formulario.reset();
   this.formulario.disable();
  }
}
