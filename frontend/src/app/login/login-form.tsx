import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useLogin } from '@/lib/service/auth';
import { Loader2 } from 'lucide-react';

export const LoginForm = () => {
    const { mutation, form } = useLogin();

    return (
        <Card className="mx-auto w-full max-w-md">
            <CardHeader>
                <CardTitle className="text-center text-2xl font-semibold">
                    Đăng nhập
                </CardTitle>
            </CardHeader>

            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit((values) =>
                            mutation.mutate(values),
                        )}
                        className="flex flex-col gap-6"
                    >
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="grid gap-2">
                                    <FormLabel>Email:</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="email"
                                            placeholder="admin@test.com"
                                            required
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="grid gap-2">
                                    <FormLabel className="flex justify-between">
                                        Mật khẩu
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="password"
                                            placeholder="Nhập mật khẩu"
                                            required
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {mutation.status === 'pending' ? (
                            <Button disabled className="w-full py-5">
                                <Loader2 className="animate-spin" />
                                Đang đăng nhập...
                            </Button>
                        ) : (
                            <Button
                                type="submit"
                                className="w-full cursor-pointer bg-blue-500 py-5 hover:bg-blue-600"
                            >
                                Đăng nhập
                            </Button>
                        )}
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};
