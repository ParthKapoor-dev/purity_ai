import { cn } from "@/lib/utils";
import {
    ArrowUpRight,
    ArrowDownLeft,
    Wallet,
    ShoppingCart,
    CreditCard,
    type LucideIcon,
    File,
    PartyPopper,
} from "lucide-react";

interface Transaction {
    id: string;
    title: string;
    email: string;
    type: "incoming" | "outgoing";
    category: string;
    icon: LucideIcon;
    timestamp: string;
    status: "completed" | "pending" | "failed";
}

interface List02Props {
    transactions?: Transaction[];
    className?: string;
}

const categoryStyles = {
    shopping:
        "from-violet-600/10 via-violet-600/5 to-violet-600/0 text-violet-700 dark:from-violet-500/20 dark:via-violet-500/10 dark:to-transparent dark:text-violet-400",
    food: "from-orange-600/10 via-orange-600/5 to-orange-600/0 text-orange-700 dark:from-orange-500/20 dark:via-orange-500/10 dark:to-transparent dark:text-orange-400",
    transport:
        "from-blue-600/10 via-blue-600/5 to-blue-600/0 text-blue-700 dark:from-blue-500/20 dark:via-blue-500/10 dark:to-transparent dark:text-blue-400",
    entertainment:
        "from-pink-600/10 via-pink-600/5 to-pink-600/0 text-pink-700 dark:from-pink-500/20 dark:via-pink-500/10 dark:to-transparent dark:text-pink-400",
};

const TRANSACTIONS: Transaction[] = [
    {
        id: "1",
        title: "Welcome to Purity AI",
        email: "purity.ai@gmail.com",
        type: "incoming",
        category: "shopping",
        icon: PartyPopper,
        timestamp: "Today, 2:45 PM",
        status: "completed",
    },
    {
        id: "2",
        title: "Upload Your Resume",
        email: "purity_ai@gmail.com",
        type: "incoming",
        category: "transport",
        icon: File,
        timestamp: "Today, 9:00 AM",
        status: "completed",
    },
    // {
    //     id: "3",
    //     title: "Netflix Subscription",
    //     amount: "$15.99",
    //     type: "outgoing",
    //     category: "entertainment",
    //     icon: CreditCard,
    //     timestamp: "Yesterday",
    //     status: "pending",
    // },
];

export default function List({
    transactions = TRANSACTIONS,
    className,
}: List02Props) {
    return (
        <div
            className={cn(
                "w-full max-w-xl mx-auto",
                "bg-white dark:bg-zinc-900/70",
                "border border-zinc-100 dark:border-zinc-800",
                "rounded-3xl shadow-xl backdrop-blur-xl",
                className
            )}
        >
            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 flex flex-col gap-2">
                        Recent Notifications
                        <p className="text-sm text-zinc-600 dark:text-zinc-500 ">
                            {transactions.length} Messages
                        </p>
                    </h2>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-zinc-600 dark:text-zinc-500">
                            This Month
                        </span>
                    </div>
                </div>

                <div className="space-y-4">
                    {transactions.map((transaction) => (
                        <div
                            key={transaction.id}
                            className={cn(
                                "group relative flex items-center gap-4",
                                "p-3 -mx-3 rounded-2xl",
                                "transition-all duration-300 ease-out",
                                "hover:bg-zinc-50 dark:hover:bg-zinc-800/50",
                                "hover:shadow-sm",
                                "border border-transparent",
                                "hover:border-zinc-200 dark:hover:border-zinc-700/50"
                            )}
                        >
                            <div
                                className={cn(
                                    "relative",
                                    "w-12 h-12 flex items-center justify-center",
                                    "rounded-2xl",
                                    "bg-gradient-to-br",
                                    categoryStyles[
                                        transaction.category as keyof typeof categoryStyles
                                    ],
                                    "transition-all duration-300",
                                    "group-hover:scale-105",
                                    "group-hover:shadow-md",
                                    "border border-zinc-200/50 dark:border-zinc-700/50",
                                    "shadow-sm"
                                )}
                            >
                                <transaction.icon className="w-5 h-5" />
                            </div>

                            <div className="flex-1 flex items-center justify-between min-w-0">
                                <div className="space-y-1 min-w-0">
                                    <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100 truncate">
                                        {transaction.title}
                                    </h3>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                        {transaction.timestamp}
                                    </p>
                                </div>

                                <div
                                    className={cn(
                                        "flex items-center gap-2 flex-shrink-0 pl-4",
                                        "transition-transform duration-300",
                                        "group-hover:scale-105"
                                    )}
                                >
                                    <span
                                        className={cn(
                                            "text-base font-semibold",
                                            transaction.type === "incoming"
                                                ? "text-emerald-700 dark:text-emerald-400"
                                                : "text-zinc-900 dark:text-zinc-100"
                                        )}
                                    >
                                        {transaction.email}
                                    </span>
                                    {transaction.type === "incoming" ? (
                                        <ArrowDownLeft className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
                                    ) : (
                                        <ArrowUpRight className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-4 border-t border-zinc-100 dark:border-zinc-800">
                <button
                    type="button"
                    className="w-full py-2.5 px-4 rounded-xl text-sm font-medium
                    text-zinc-700 dark:text-zinc-400 
                    hover:bg-zinc-50 dark:hover:bg-zinc-800
                    transition-colors duration-200"
                >
                    No Other Notifications
                </button>
            </div>
        </div>
    );
}