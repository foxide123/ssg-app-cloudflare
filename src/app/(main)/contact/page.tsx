import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactPage(){
    return (
        <section className="bg-accent py-12 md:py-24">
        <div className="container">
          <div className="mb-12 flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Ready to Transform Your Business?
            </h2>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our experts are here to guide you through every step of the process.
              Let&apos;s start the conversation today.
            </p>
          </div>
          <Card className="mx-auto w-full max-w-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Talk to an Expert
              </CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company name</Label>
                  <Input id="company" placeholder="Acme Inc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="size">Company size</Label>
                  <Select>
                    <SelectTrigger id="size">
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-500">201-500 employees</SelectItem>
                      <SelectItem value="501+">501+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-4">
              <p className="text-sm text-muted-foreground">
                We typically respond within 2 business days
              </p>
              <Button className="w-full">Contact Sales Now</Button>
              <div className="flex w-full justify-center space-x-4">
                <Button variant="outline" size="icon">
                  <Phone className="size-4" />
                  <span className="sr-only">Call sales</span>
                </Button>
                <Button variant="outline" size="icon">
                  <Mail className="size-4" />
                  <span className="sr-only">Email sales</span>
                </Button>
                <Button variant="outline" size="icon">
                  <MessageCircle className="size-4" />
                  <span className="sr-only">Chat with sales</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>
    )
}