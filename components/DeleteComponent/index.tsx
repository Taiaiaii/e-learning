import TrashButton from '../../public/trash.svg';
import ColorfulGarbage from '../../public/colorfulGarbage.svg';
import { Button } from '../Button';
import { ModalTrigger } from '../ModalTrigger';
import { ModalContent } from '../ModalContent';

export default function DeleteComponent () {
    return (
      <ModalTrigger button={<TrashButton />}>
        <ModalContent
          icon={<ColorfulGarbage />}
          buttonConfirm={<Button variant='filled'>Com certeza</Button>}
          buttonCancel={<Button variant='ghost'>Não</Button>}
          description='Quer excluir suas aulas?'
        />
      </ModalTrigger>
    );
}