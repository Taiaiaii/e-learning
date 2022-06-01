import TrashButton from '@public/trash.svg';
import ColorfulGarbage from '@public/colorfulGarbage.svg';
import { Button } from '@components/Button';
import { Modal } from '@components/Modal';

export default function DeleteComponent () {
    return (
        <Modal
          trigger={<TrashButton />}
          icon={<ColorfulGarbage />}
          buttonConfirm={<Button variant='filled'>Com certeza</Button>}
          buttonCancel={<Button variant='ghost'>Não</Button>}
          description='Quer excluir suas aulas?'
        />
    );
}