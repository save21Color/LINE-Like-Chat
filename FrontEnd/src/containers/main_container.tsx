import * as React from 'react';
import { ChatMenuState, ChatRoomState } from '../reducers/chat_menu_reducer';

type Props = ChatMenuState & ChatRoomState;
class MainContainer extends React.Component<Props> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                main.
            </div>
        );
    }
}

export { MainContainer };
