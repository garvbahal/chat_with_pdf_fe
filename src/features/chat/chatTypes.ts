export type sideBarChat = {
    _id: string;
    lastMessage: string;
    pdfId: {
        _id: string;
        fileName: string;
    };
    title: string;
    updatedAt: string;
};

export type sideBarChatResponse = {
    success: boolean;
    allChats: sideBarChat[];
};

export type Message = {
    role: string;
    content: string;
    updatedAt: string;
    createdAt: string;
};

export type ActiveChatResponse = {
    success: boolean;
    message: string;
    chatResponse: {
        title: string;
        messages: Message[];
    };
};

export type AskQuestionResponse = {
    success: boolean;
    answer: string;
};
