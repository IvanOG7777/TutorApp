// just an example page to post users and to see how they would look like
import {useUserStore} from "@/store/userStore.ts";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button";

const lowerStatus = (string) => {
    if (!string) return "";
    return string[0] + string.slice(1).toLowerCase();
}

export default function Users() {

    const users = useUserStore((state) => state.users);
    const deleteUser = useUserStore((state) => state.deleteUser);
    const editUser = useUserStore((state) => state.editUser);

    return (
        <div className="space-y-4">

            <div  className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {users.map((user) => (
                    <Card>
                        <CardHeader className="flex flex-row items-center gap-3">
                            <CardTitle>
                                <div className="flex flex-row items-center gap-3 justify-center">
                                    <img
                                        src={user.profileImageUrl}
                                        alt="profileImage"
                                        className="h-9 w-9 rounded-full object-cover"
                                    />
                                    <div className="space-x-4">
                                        <span className="text-lg font-semibold text-gray-700"> {user.name.firstName} {user.name.lastName}</span>
                                        <span className={`text-xs px-2 py-0.5 rounded-full ${user.status === "ACTIVE" ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-700"}`}>
                                            {lowerStatus(user.status)}
                                        </span>
                                    </div>
                                </div>
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-2">
                            <div className="text-sm">
                                <div className="text-muted-foreground">Phone</div>
                                <div>{user.userInfo.phoneNumber}</div>
                            </div>


                            <div className="text-sm">
                                <div className="text-muted-foreground">Address</div>
                                <div>
                                    {user.userInfo.address.street}
                                    <br />
                                    {user.userInfo.address.city}, {user.userInfo.address.state} {user.userInfo.address.zip}
                                </div>
                            </div>

                            <div className="pt-3 flex items-center gap-2">
                                <Button
                                    variant=""
                                    onClick={() => editUser(u.id, { status: user.status === "ACTIVE" ? "INACTIVE" : "ACTIVE",})}
                                >
                                    Toggle Status
                                </Button>
                                <Button variant="destructive" onClick={() => deleteUser(user.id)}>
                                    Delete
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )

}