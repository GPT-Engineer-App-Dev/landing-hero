import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function Index() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      
      <section className="text-center">
        <h1 className="text-4xl font-bold">Welcome to SaaS Inc</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The best solution for managing your business.
        </p>
        <Button className="mt-6" variant="primary">Get Started</Button>
      </section>
      <section id="features" className="mt-12">
        <h2 className="text-3xl font-semibold text-center">Features</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Feature One</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Details about feature one.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Details about feature two.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Details about feature three.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section id="pricing" className="mt-12">
        <h2 className="text-3xl font-semibold text-center">Pricing</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Basic Plan</CardTitle>
              <CardDescription>$10/month</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Details about the basic plan.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Choose Plan</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Standard Plan</CardTitle>
              <CardDescription>$20/month</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Details about the standard plan.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Choose Plan</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Premium Plan</CardTitle>
              <CardDescription>$30/month</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Details about the premium plan.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Choose Plan</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section id="contact" className="mt-12">
        <h2 className="text-3xl font-semibold text-center">Contact Us</h2>
        <form className="mt-6 max-w-lg mx-auto">
          <div className="grid grid-cols-1 gap-4">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Textarea placeholder="Your message" />
            <Button type="submit" variant="primary">Send Message</Button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Index;