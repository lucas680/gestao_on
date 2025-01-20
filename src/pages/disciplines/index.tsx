import FloatButton from '@/components/buttons/floatButton/floatButton';
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
        <FloatButton onClick={onAddButton} icon={<AddIcon />} />
      </section>
    </div>
  );
}