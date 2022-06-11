import { MouseEventHandler } from 'react';

import TrashButton from '@public/trash.svg';
import ColorfulGarbage from '@public/colorfulGarbage.svg';
import { Button } from '@components/Button';
import { Modal } from '@components/Modal';

interface IDeleteComponentProps {
  handleDelete: MouseEventHandler<HTMLButtonElement>
  id: string;
}

export default function DeleteComponent ({ handleDelete, id }: IDeleteComponentProps) {
    return (
      <Modal
        trigger={<TrashButton />}
        icon={<ColorfulGarbage />}
        buttonConfirm={
          <Button          
            onClick={handleDelete}
            variant='filled'
            id={id}           
          >
            Com certeza
          </Button>
        }
        buttonCancel={<Button variant='ghost'>Não</Button>}
        description='Quer excluir suas aulas?'
        data-testid='modal'
      />
    );
}