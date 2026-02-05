import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function PayBillPage() {
    return (
        <div className="container mx-auto px-4 py-24 min-h-screen">
            <div className="max-w-md mx-auto space-y-8">
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold">Pay Your Bill</h1>
                    <p className="text-muted-foreground">Securely pay your internet bill online</p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Quick Pay</CardTitle>
                        <CardDescription>Enter your details to proceed with payment</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="account-id">Account ID / Phone Number</Label>
                            <Input id="account-id" placeholder="e.g. 0123456789" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="amount">Amount (BDT)</Label>
                            <Input id="amount" placeholder="e.g. 1000" type="number" />
                        </div>
                        <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold hover:shadow-lg transition-all">
                            Proceed to Pay
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
