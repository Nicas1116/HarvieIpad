#import "AppDelegate.h"
#import <PresentationKit/PresentationKit+Private.h>

@interface AppDelegate () <
PKPresentationViewControllerDelegate
>

@end

@implementation AppDelegate

- (BOOL) application:(UIApplication*)application didFinishLaunchingWithOptions:(NSDictionary*)launchOptions
{
    NSError* error = nil;
    if (![PKPackage loadPackagesAtPath:[self contentPackPath] error:&error]) {
        NSLog(@"%@", error);
    }
    
    PKPresentation* presentation = [PKPresentation presentationWithName:@"MY_Meronem_P_MeronemTest"];
    NSAssert(presentation != nil, @"Why is there no presentation named 'MY_Meronem_P_MeronemTest'?");
    
    PKPresentationViewController* controller = (PKPresentationViewController*)[[self window] rootViewController];
    [controller setFlow:[presentation defaultFlow]];
    [controller setDelegate:self];
    
    [[self window] makeKeyAndVisible];
    return YES;
}

- (void) applicationDidEnterBackground:(UIApplication*)application
{
}

- (void) applicationDidBecomeActive:(UIApplication *)application
{
}

- (void) applicationWillTerminate:(UIApplication*)application
{
}

- (void) presentationViewControllerDidRequestExit:(PKPresentationViewController *)controller
{
    // Nothing
}

- (NSURL*) presentationViewController:(PKPresentationViewController*)slidePresenter willLoadContentFromURL:(NSURL*)url
{
    if ([[url scheme] isEqualToString:@"package"]) {
        return [NSURL fileURLWithPath:[PresentationKit pathToResourceForPackageURL:url]];
    } else {
        return url;
    }
}


#pragma mark - Paths

- (NSString*) contentPackPath
{
    return [[[NSBundle mainBundle] resourcePath] stringByAppendingPathComponent:@"Content"];
}

- (NSURL*) applicationDocumentsDirectory
{
    return [[[NSFileManager defaultManager] URLsForDirectory:NSDocumentDirectory inDomains:NSUserDomainMask] lastObject];
}

@end
