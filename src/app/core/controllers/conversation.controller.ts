import { inject, Injectable } from '@angular/core';
import * as uuid from 'uuid';
import { GoverknowerAPIService } from '../services/goverknower-api.service';
import { Conversation } from '../models/conversation.model';

@Injectable({
    providedIn: 'root',
})
export class ConversationController {
    private api = inject(GoverknowerAPIService);
    private conversation: Conversation;

    constructor() {
        const conversationId = uuid.v4();
        this.conversation = new Conversation(conversationId);
    }

    public sendMessage(message: string) {
        this.conversation.addMessage(message, 'user');

        this.api.sendMessage(message)?.subscribe((response) => {
            this.conversation.addMessage(response, 'ai');
        });
    }

    public getConversation(): Conversation {
        return this.conversation;
    }
}
