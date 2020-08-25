import { DatePipe } from '@angular/common';

export interface VeiculoDTO{
    id: string
    modelo?: string
    ano: string;
    preco: number
    tipoVeiculo: string
    categoriaId?: string
    detalhesId?: string
    cor?: string
    kmRodado?: number
    portas?: number;
    cambio?: string
    informacoes?: string;
    imageUrl?: string
}