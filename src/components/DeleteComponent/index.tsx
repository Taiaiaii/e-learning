import TrashButton from '@public/trash.svg';
import ColorfulGarbage from '@public/colorfulGarbage.svg';
import { Button } from '@components/Button';
import { Modal } from '@components/Modal';

interface IDeleteComponentProps {
  handleDelete: () => void
}

export default function DeleteComponent ({ handleDelete }: IDeleteComponentProps) {
    return (
        <Modal
          trigger={<TrashButton />}
          icon={<ColorfulGarbage />}
          buttonConfirm={<Button onClick={()=> handleDelete()} variant='filled'>Com certeza</Button>}
          buttonCancel={<Button variant='ghost'>Não</Button>}
          description='Quer excluir suas aulas?'
        />
    );
}