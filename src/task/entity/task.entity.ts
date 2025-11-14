import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique:true})
  title: string;

  @Column({ default: false })
  completed: boolean;

}