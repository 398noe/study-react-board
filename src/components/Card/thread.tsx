import { thread } from "../../../types/threads";

type threadCardProps = thread;
export const ThreadCard: React.FC<threadCardProps> = (props: threadCardProps) => {
    const { id, title } = props;
    return (
        <div className="w-full border-b-2 border-indigo-500 shadow-md rounded-xl p-4 hover:border-pink-500">
            <div className="title">
                <p className="text-xl">{title}</p>
            </div>
        </div>
    );
}

export default ThreadCard;