import CircleButton from '@/components/buttons/circleButton/circleButton';
import styles from './styles.module.scss';
import HeadComponent from "@/components/head/head";
import { AddIcon } from '@/components/icons/icons';

export default function Disciplines() {

  const onAddButton = ()=>{
    //
  }
  return (
    <div>
      <HeadComponent />
      <section>
        <CircleButton onClick={onAddButton} icon={<AddIcon />} />
      </section>
    </div>
  );
}