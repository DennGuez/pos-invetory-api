import { Entity, Column } from 'typeorm';

@Entity()
export class Product {
    
    @Column({ primary: true, generated: true })
    id: number;

    @Column({ type: 'varchar', length: 200 })
    name: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    sellingPrice: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    buyingPrice: number;

    @Column()
    stock: number;
}